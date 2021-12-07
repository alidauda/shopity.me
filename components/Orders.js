import Link from 'next/link';
export default function OrdersList({orders}){
    console.log(orders);
    return orders?orders.map((order)=> <OrderItems order={order} key={order.orderId}/>):null
}



function OrderItems({order}){
    return(

        <div className="flex flex-col ...">
<div className="bg-gray-400 p-3 text-align: center">{order.orderId}</div>
  
</div>
    ); 

}