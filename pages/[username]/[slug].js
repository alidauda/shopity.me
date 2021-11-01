import { firestore, getUserWithUsername, postToJSON } from '../../lib/firebase';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import PostContent from '../../lib/PostContent';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link'

export async function getStaticProps({ params }) {
    const { username, slug } = params;
    const userDoc = await getUserWithUsername(username);
  
    let post;
    let path;
  
    if (userDoc) {
      const postRef = userDoc.ref.collection('post').doc(slug);
      post = postToJSON(await postRef.get());
  
      path = postRef.path;
    }
  
    return {
      props: {post: post||null, path :path||null },
      revalidate: 100,
    };
  }
export async function getStaticPaths(){
  const snapshot = await firestore.collectionGroup('post').get();
  const paths=snapshot.docs.map((doc)=>{
    const {slug, username}=doc.data();
    return{
      params:{username,slug},

    };
  });
  return{
    paths,
    fallback:'blocking'
  }
}
export default function PostPage(props){
  const postRef=firestore.doc(props.path);
  const[realtime]=useDocumentData(postRef);
  const post=realtime||props.post
  console.log(post.username)
    return(
        <main>
<nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
 <Link href={`/${post.username}`}><a className="navbar-brand"><ArrowBackIcon/></a></Link>
  </div>
</nav>
<div className="container-fluid container-sm">
<img src={"/add.jpg"} className="img-fluid" alt="..."/>
 
</div>


<section>
  <PostContent post={post}/>
 
</section>

        </main>
        
    )
}