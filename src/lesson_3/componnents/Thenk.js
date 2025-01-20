
import { useTranslation } from "react-i18next";

export default function Thank(){
    const{t}=useTranslation();
    return(
<>
<h1>{t('Thenk.h1')}</h1>

</>

    );
}