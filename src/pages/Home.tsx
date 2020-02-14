import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonCard, IonCardHeader } from '@ionic/react';
import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Jacket off market</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonCard>
            <img src="assets/icon/k3_nice.jpg" alt="./icon.png" />
            <IonCardHeader>Krrish 3</IonCardHeader>
          </IonCard>
          <IonCard>
            <img src="assets/icon/trool2.jpg" alt="./icon.png" />
            <IonCardHeader>trool 2</IonCardHeader>
          </IonCard>
          <IonCard>
            <img src="assets/icon/Conan_le_barbare.jpg" alt="./icon.png" />
            <IonCardHeader>Conan le barbare</IonCardHeader>
          </IonCard>
          <IonCard>
            <img src="assets/icon/juan_skysharks700.jpg" alt="./icon.png" />
            <IonCardHeader>Sky shark</IonCardHeader>
          </IonCard>
          <IonCard>
            <img src="assets/icon/kungFuKarate.jpg" alt="./icon.png" />
            <IonCardHeader>justicia justiciera 3</IonCardHeader>
          </IonCard>
          <IonCard>
            <img src="assets/icon/maxresdefault.jpg" alt="./icon.png" />
            <IonCardHeader>drunken master</IonCardHeader>
          </IonCard>
          <IonCard>
            <img src="assets/icon/Rape_Zombie_Lust_of_the_Dead_3.png" alt="./icon.png" />
            <IonCardHeader>rape zombie 3</IonCardHeader>
          </IonCard>
          <IonCard>
            <img src="assets/icon/Wolfcop.jpg" alt="./icon.png" />
            <IonCardHeader>wolfcop</IonCardHeader>
          </IonCard>
          <IonCard>
            <img src="assets/icon/81xank2Z9CL._RI_.jpg" alt="./icon.png" />
            <IonCardHeader>samurai cop</IonCardHeader>
          </IonCard>
          <IonCard>
            <img src="assets/icon/86bb4e2e18a3b9a2af9730dc676369e0.jpg" alt="./icon.png" />
            <IonCardHeader>Blood sport</IonCardHeader>
          </IonCard>
          <IonCard>
            <img src="assets/icon/Affiche_Cinema_Hitman.jpg" alt="./icon.png" />
            <IonCardHeader>Hitman le cobra</IonCardHeader>
          </IonCard>
          <IonCard>
            <img src="assets/icon/DM2267.jpg" alt="./icon.png" />
            <IonCardHeader>With age comes wisdom and saggy man boobs</IonCardHeader>
          </IonCard>
          <IonCard>
            <img src="assets/icon/unnamed.jpg" alt="./icon.png" />
            <IonCardHeader>Birdemic</IonCardHeader>
          </IonCard>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
