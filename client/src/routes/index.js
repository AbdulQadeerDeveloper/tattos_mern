import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Categories from "../dashboard/constants/categories";
import Placement from "../dashboard/constants/placement";
import Tattoo from "../dashboard/constants/tattoo";
import Reject from "../dashboard/constants/reject";
import Pending from "../dashboard/constants/pending";
import Approved from "../dashboard/constants/approved";
import Dashboard from "../dashboard/constants/dashboard";
import ProfileUser from "../dashboard/components/profile";
import Homecomponent from "../features/pages/home/component.js";
import CategoriesComponent from "../features/pages/category/component.js";
import ArtistComponent from "../features/pages/artist/component.js";
import DetailsComponent from "../features/pages/details/component.js";
import UploadComponent from "../features/pages/upload/component.js";
import TattooComponent from "../features/pages/tattoo/component.js";
import CategoriesIdComponent from "../features/pages/categoryID/component.js";
import BookingComponent from "../features/pages/booking/component.js";
import LoginComponent from "../features/pages/auth/login/component.js";
import RegisterComponent from "../features/pages/auth/register/component.js";
import ForgotPasswordComponent from "../features/pages/auth/forgot/component.js";
import ResetPasswordComponent from "../features/pages/auth/reset/component.js";
import NotFoundComponent from "../features/shared/component/NotFoundComponent.js";
import UpdateCategory from "../dashboard/constants/updateCategory/component.js";
import UpdatePlacement from "../dashboard/constants/updatePlacement/component.js";
import UpdateTattoo from "../dashboard/constants/updateTattoos/component.js";
import UsersComponent from "../dashboard/constants/users/component/users.js";
import ProtectedRoute from "../features/auth/components/protectedRoute.js";
import BusinessComponent from "../dashboard/constants/business/component.js";
import AddTattoo from "../dashboard/constants/addTattoos/component.js";
import PaymentComponent from "../features/pages/checkout/component.js";
import PaymentGateComponent from "../features/pages/straipePayment/component.js";
import FastPayPalPayment from "../features/tattoos/component/cardPayment/fastPay.js";
import PaymentFastGateComponent from "../features/pages/fastPaypal/component.js";
import CheckOutPayment from "../dashboard/constants/paymentPlain/component.js";
import PaymentSuccessComponent from "../features/pages/paymentSuccess/component.js";
import ContactComponent from "../features/pages/contact/component.js";
import CustomerComponent from "../features/pages/customer/component.js";

// Initialize React app with React Router for page navigation
const CombineRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homecomponent />} />
        <Route path="/categories" element={<CategoriesComponent />} />
        <Route path="/booking" element={<BookingComponent />} />
        <Route path="/artists" element={<ArtistComponent />} />
        <Route path="/blogs" element={<DetailsComponent />} />
        <Route path="/upload-tatttoos" element={<UploadComponent />} />
        <Route path="/tattoos" element={<TattooComponent />} />
        <Route path="/tattoo/:id" element={<CategoriesIdComponent />} />
        <Route path="/checkout" element={< PaymentComponent/>} />
        <Route path="/stripe" element={< PaymentGateComponent/>} />
        <Route path="/fastPay" element={< PaymentFastGateComponent/>} />
        <Route element={<ProtectedRoute isAdminRoute={true} />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/business" element={<BusinessComponent />} />
          <Route path="/update/:id" element={<UpdateCategory />} />
          <Route path="/placement/:id" element={<UpdatePlacement />} />
          <Route path="/user" element={<ProfileUser />} />
          <Route path="/users" element={<UsersComponent />} />
          <Route path="/tattoo" element={<Tattoo />} />
          <Route path="/add-tattoos" element={<AddTattoo />} />
          <Route path="/tattoos-update/:id" element={<UpdateTattoo />} />
          <Route path="/tattoos-approved" element={<Approved />} />
          <Route path="/tattoos-pending" element={<Pending />} />
          <Route path="/tattoos-reject" element={<Reject />} />
          <Route path="/tattoos-category" element={<Categories />} />
          <Route path="/tattoos-placement" element={<Placement />} />
          <Route path="/tattoos-plain" element={<CheckOutPayment />} />
        </Route>
        <Route path="/success" element={<PaymentSuccessComponent />} />
        <Route path="/contact" element={<ContactComponent />} />
        <Route path="/customer-details" element={<CustomerComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/register" element={<RegisterComponent />} />
        <Route path="/forgot-password" element={<ForgotPasswordComponent />} />
        <Route path="/reset_password/:id/:token" element={<ResetPasswordComponent />} />
        <Route path="*" element={<NotFoundComponent />} />
      </Routes>
    </Router>
  );
}

export default CombineRoute;
