import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <a href="/api/auth/login">Login</a>
      <a href="/api/auth/logout">Logout</a>
    </div>
  );
}
