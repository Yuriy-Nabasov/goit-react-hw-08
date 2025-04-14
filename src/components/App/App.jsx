// import { useDispatch, useSelector } from "react-redux";

// import { Analytics } from "@vercel/analytics/react";

import Section from "../Section/Section";
import Container from "../Container/Container";
import Heading from "../Heading/Heading";
// import ContactForm from "../ContactForm/ContactForm";
// import SearchBox from "../SearchBox/SearchBox";
// import ContactList from "../ContactList/ContactList";
// import Notification from "../Notification/Notification";

// import { selectIsRefreshing } from "../../redux/auth/selectors";
import { lazy, Suspense } from "react";
// import { refreshUser } from "../../redux/auth/operations";
import Layout from "../Layout/Layout";
import { Route, Routes } from "react-router-dom";
// import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";
// import PrivateRoute from "../PrivateRoute/PrivateRoute";

import "./App.css";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegisterPage = lazy(() =>
  import("../../pages/RegisterPage/RegisterPage")
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage")
);

// import { useEffect } from "react";
// import { fetchContacts } from "../../redux/contactsOps";
// import {
//   selectContacts,
//   selectIsLoading,
//   selectIsError,
// } from "../../redux/contactsSlice";
// import Loader from "../Loader/Loader";
// import Error from "../Error/Error";

// export default function App() {
//   const dispatch = useDispatch();

//   const contacts = useSelector(selectContacts);
//   const isLoading = useSelector(selectIsLoading);
//   const isError = useSelector(selectIsError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <Section>
//       <Container>
//         <Heading
//           title="Phonebook release with registration and login"
//           bottom
//           tag={`h1`}
//         />
//         <ContactForm />
//         <SearchBox />
//         <div>{contacts.length === 0 && <Notification />}</div>
//         {isLoading && <Loader>Loading message</Loader>}
//         {isError && <Error>Error message</Error>}
//         {contacts.length > 0 && <ContactList />}
//         <Analytics />
//       </Container>
//     </Section>
//   );
// }

export default function App() {
  // const dispatch = useDispatch();
  // const isRefreshing = useSelector(selectIsRefreshing);

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);
  return (
    <Section>
      <Container>
        <Heading
          title="Phonebook release with registration and login"
          bottom
          tag={`h1`}
        />
        {/* isRefreshing ? (<strong>Getting user data please wait...</strong>) : ( */}
        <Layout>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/contacts" element={<ContactsPage />} />
            </Routes>
          </Suspense>
        </Layout>
        {/* ); */}
        {/* <Analytics /> */}
      </Container>
    </Section>
  );
}
