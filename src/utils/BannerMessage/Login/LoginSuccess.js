import { showMessage} from "react-native-flash-message";
export default () =>{
    showMessage({
        message: "Giriş başarıyla yapıldı!",
        type: "success",
        icon:'success'
      });
}