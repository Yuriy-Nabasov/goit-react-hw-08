import PageTitle from "../../components/PageTitle/PageTitle";

export default function HomePage() {
  return (
    <div>
      <PageTitle>
        Welcome to your personal contact organizer!{" "}
        <span role="img" aria-label="Greeting icon">
          📝
        </span>
      </PageTitle>
      <h2>Here you can easily manage your contacts:</h2>
      <p>
        📞 Keep all your important contacts in one place. <br />
        🔍 Search among existing contacts by name and phone number. <br />
        ✏️ Edit contact information at any time, adding new data or updating old
        ones. <br />
        <br />
        We strive to make your communication closer and more convenient. <br />
        Have a nice day and productive use!
      </p>
    </div>
  );
}
