import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "An Error Occured!";
  let content = "Something Went Wrong!";

  if (error.status === 404) {
    title = "Page or Resource Not Found";
    content = "Invalid URL";
  }

  if (error.status === 500) content = error.data.message;

  console.log();

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{content}</p>
      </PageContent>
    </>
  );
};
export default ErrorPage;
