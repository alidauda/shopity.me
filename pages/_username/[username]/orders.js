import { useAuth,firestore } from 'lib/firebase';
import { useCollection } from 'react-firebase-hooks/firestore'
import OrdersList from 'components/Orders';
export default function Our(){
    const {userId}=useAuth();
  const ref = firestore.collection('orders').where("buyerId","==",userId);
      
      
  const [querySnapshot] = useCollection(ref);
  const order = querySnapshot?.docs.map((doc) => doc.data());
  console.log(userId);
    return(
<div><OrdersList orders={order}/></div>
    );

}