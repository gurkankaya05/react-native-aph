export default(errorCode) =>{
    switch (errorCode) {
        case 'auth/invalid-email':
            return "Geçersiz E-Posta adresi"

            case 'auth/email-already-exist':
                return "Kullanıcı zaten kayıtlı."
            
                case 'auth/weak-password':
                    return "Parola Zayıf." 

                case 'auth/wrong-password':
                    return "Girilen parola yanlış." 
            
        default:
            return errorCode;
    }

}