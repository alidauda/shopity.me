import Link from 'next/link';
import {useAuth} from "lib/firebase.js";

// Component's children only shown to logged-in users
export default function AuthCheck(props) {
    const{userId} =useAuth();

  return userId ? props.children : props.fallback || <Link href="/createAccount">You must be signed in</Link>;
}
