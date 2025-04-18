import { useDispatch, useSelector } from "react-redux";

import { Analytics } from "@vercel/analytics/react";

import Section from "../Section/Section";
import Container from "../Container/Container";
import Heading from "../Heading/Heading";

import { selectIsRefreshing } from "../../redux/auth/selectors";
import { lazy, Suspense } from "react";
import { refreshUser } from "../../redux/auth/operations";
import Layout from "../Layout/Layout";
import { Route, Routes } from "react-router-dom";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

import "./App.css";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegisterPage = lazy(() =>
  import("../../pages/RegisterPage/RegisterPage")
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage")
);

import { useEffect } from "react";

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <Section>
      <Container>
        <Heading
          title="Phonebook release with registration and login"
          bottom
          tag={`h1`}
        />
        {isRefreshing ? (
          <strong>Getting user data please wait...</strong>
        ) : (
          <Layout>
            <Suspense fallback={null}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                  path="/register"
                  element={
                    <RestrictedRoute
                      component={<RegisterPage />}
                      redirectTo="/contacts"
                    />
                  }
                />
                <Route
                  path="/login"
                  element={
                    <RestrictedRoute
                      component={<LoginPage />}
                      redirectTo="/contacts"
                    />
                  }
                />
                <Route
                  path="/contacts"
                  element={
                    <PrivateRoute
                      component={<ContactsPage />}
                      redirectTo="/login"
                    />
                  }
                />
              </Routes>
            </Suspense>
          </Layout>
        )}
        <Analytics />
      </Container>
    </Section>
  );
}
