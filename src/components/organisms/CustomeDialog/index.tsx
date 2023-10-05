import React, { useEffect } from "react";
import { toast } from "react-toastify";
import styles from "./customeDialog.module.scss";
import { logOut } from "services/auth";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

interface IDialogProps {
  open: boolean;
  onClose: () => void;
}

const Dialog: React.FC<IDialogProps> = ({ open, onClose }) => {
  const router = useRouter();
  const handleLogOut = () => {
    logOut()
      .then((res) => {
        toast.success(res.message);
        Cookies.remove("Authorization");
        router.push("/login");
      })
      .catch((err) => {
        toast.error(err.message);
        console.log(err);
      });
  };
  return (
    <div className={styles.main} style={{ opacity: open ? 1 : 0 }}>
      <ul>
        <li onClick={handleLogOut}>Log Out</li>
      </ul>
    </div>
  );
};

export default Dialog;

