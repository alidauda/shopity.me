import AuthCheck from "components/AuthChecker.js";

export default function AdminPostsPage(props) {

    return (
      <main>
        <AuthCheck>
         <ContentPage/>
        </AuthCheck>
      </main>
    );
  }

  function ContentPage(){
      return (
<div className="w-full bg-gray-200 flex"><div className="bg-red-200 admin-1">
    </div>
    <div className="bg-yellow-300 admin-2">lol
    </div>
    </div>
      );
  }