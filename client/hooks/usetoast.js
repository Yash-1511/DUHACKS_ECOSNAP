import { toast } from "react-hot-toast";

export default function useToast() {
  const showToast = (message, type = "success") => {
    toast(message, {
      type,
      autoClose: 3000,
      pauseOnHover: true,
    });
  };
  return [showToast];
}
