import * as React from "react";
import { NextSeo } from "next-seo";
import {
  getUserWithUsername,
  postToJSON,
  auths,
  serverTimestamp,
} from "lib/firebase";
import Metatags from "lib/Metatags";
import IndexPageFeed from "components/IndexPage.js";
import Footer from "components/Foote.js";

export async function getServerSideProps({ query }) {
  const { username } = query;
  const userDoc = await getUserWithUsername(username);
  if (!userDoc) {
    return {
      notFound: true,
    };
  }
  let user = null;
  let post = null;
  let path;

  if (userDoc) {
    user = userDoc.data();

    const postQuery = userDoc.ref
      .collection("items")
      .where("published", "==", true);

    post = (await postQuery.get()).docs.map(postToJSON);
  }
  return {
    props: { user, post }, // will be passed to the page component as props
  };
}

export default function UserProfilePage({ user, post }) {
  const title = `${user.shopname}`;
  const descriptions = `${user.shopname}-The best place to shop online`;
  const url = `https://www.myshago.store/${user.shopname}`;
  return (
    <main>
      <NextSeo
        title={title}
        description={descriptions}
        canonical={url}
        openGraph={{
          title,
          url,
          descriptions,
          image: [{
            url:`${user.profile}`,
            alt:descriptions,
            width:1280,
            height:720
          }],
          twitter:{
        
            site: '@site',
            cardType: 'summary_large_image',
          }
        }}
      />
      
      <div>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand">{user.shopname}</a>
            <form className="d-flex justify-content-center">
              <input
                className="form-control me-3 w-100"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
      <IndexPageFeed user={user} posts={post} />
      <Footer username={user.shopname} />
    </main>
  );
}
