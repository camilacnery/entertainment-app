import type { NextPage } from "next";
import ErrorPage from "@/components/pages/Error";

const InternalError: NextPage = () => <ErrorPage status={500} />;

export default InternalError;
