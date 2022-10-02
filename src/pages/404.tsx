import type { NextPage } from "next";
import ErrorPage from "@/components/pages/Error";

const NotFound: NextPage = () => <ErrorPage status={404} />;

export default NotFound;
