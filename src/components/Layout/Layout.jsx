import { IonContent, IonMenuButton, IonPage } from "@ionic/react";
import "./Layout.css";
import SideMenu from "../SideMenu/SideMenu";
const Layout = ({children}) => {
  return (
    <IonPage>
      <SideMenu />
      <IonContent fullscreen id="enable-sidemenu">
        <div className="taskbar-container">
          <IonMenuButton/>
        </div>
        <div className='desktop-container'>
            {/* TODO add responsiveGrid */}
            {children}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Layout;
