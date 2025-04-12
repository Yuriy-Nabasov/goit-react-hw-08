import { useDispatch, useSelector } from "react-redux";
import {
  selectContacts,
  selectIsLoading,
  selectIsError,
} from "../../redux/contactsSlice";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import Notification from "../../components/Notification/Notification";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import ContactList from "../../components/ContactList/ContactList";

export default function ContactsPage() {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <SearchBox />
      <div>{contacts.length === 0 && <Notification />}</div>
      {isLoading && <Loader>Loading message</Loader>}
      {isError && <Error>Error message</Error>}
      {contacts.length > 0 && <ContactList />}
    </>
  );
}
