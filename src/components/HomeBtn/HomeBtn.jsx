import { Link } from "react-router-dom";

export default function HomeBtn() {
  return (
    <Link to="/" className="homeBtn">
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32 29.0368V17.442C32.0001 16.6353 31.8334 15.8371 31.5103 15.0963C31.1871 14.3554 30.7142 13.6876 30.1205 13.1336L19.061 2.80996C18.504 2.28982 17.7665 2 17 2C16.2335 2 15.496 2.28982 14.939 2.80996L3.8795 13.1336C3.28584 13.6876 2.81293 14.3554 2.48975 15.0963C2.16656 15.8371 1.99991 16.6353 2 17.442V29.0368C2 29.8227 2.31607 30.5764 2.87868 31.1321C3.44129 31.6878 4.20435 32 5 32H29C29.7956 32 30.5587 31.6878 31.1213 31.1321C31.6839 30.5764 32 29.8227 32 29.0368Z"
          stroke="#00E3B3"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}
