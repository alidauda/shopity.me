import { firestore, getUserWithUsername, postToJSON,auths } from '../../lib/firebase';
import AccountPage from '../../components/AccountPage.js'
export async function getServerSideProps({query}) {
    const{ username}=query;
    const userDoc= await getUserWithUsername(username);
    if (!userDoc) {
     return {
       notFound: true,
     };
   }
   let user=null;
   let post =null;
   if(userDoc){
       user=userDoc.data();
      
 const postQuery=userDoc.ref.collection('cart').where('username','==',username);
   post=(await postQuery.get()).docs.map(postToJSON)
     }
    return {
       props: {user,post}, // will be passed to the page component as props
     }
   }


export default function Test({user,post}){
    
      
    return auths.currentUser?<>
    
    
   <AccountPage user={user}/>
    </>:<>
    <div className="container-fluid  mt-5">
    <p className="fs-2 text-center">Please u need to sign in</p>
</div>
<div className="container-fluid  mt-5">
    <button type="button" className="btn btn-primary" onClick={()=>{window.location='/ent'}}>Sign in</button>
</div>
    <AccountPage user={user}/>
    </>;

}
