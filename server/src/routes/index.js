import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Contact from "../features/contact/component/contact";
// import Register from "../auth/components/register";
// import Login from "../auth/components/login";
// // import Dashboard from "../dashboard/components/dashboard";
// import Logout from "../auth/components/logout";
// import ProtectedRoute from "../auth/protectedAuth/ProtectedRoute"


import CategoriesComponent from "../features/categories/mainCate/categories";
import FollowerComponent from "../features/pages/followerComponent";
import ListComponent from "../features/pages/listComponent";
import DetailsComponent from "../features/pages/detailsComponent";
import ArtisComponent from "../features/pages/artisComponent";
import TattooComponent from "../features/pages/tattoodetails";
import ArtisUpload from "../features/pages/artis_Upload";
import ListTattoo from "../features/pages/listingTattoos";
import HomeComponent from "../features/pages/homeComponent";
import UploadComponent from "../features/pages/uploadComponent";




const CombineRoute = () => {


  return (
    <Router>
      
      
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/categories" element={<CategoriesComponent />} />
        <Route path="/artist" element={<ArtisComponent />} />
        <Route path="/listDetails" element={<ArtisUpload />} />
        <Route path="/Details" element={<DetailsComponent />} /> 
        <Route path="/upload" element={<UploadComponent />} /> 
        <Route path="/follower" element={<FollowerComponent />} />
        <Route path="/list" element={<ListComponent />} />
        <Route path="/tattoo" element={<TattooComponent />} />
        <Route path="/listing" element={<ListTattoo />} />
    
        {/* <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="logout" element={<Logout />} /> */}
        {/* <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} /> // ProtectedRoute */}
      </Routes>
    
    </Router >
  );
}

export default CombineRoute;
