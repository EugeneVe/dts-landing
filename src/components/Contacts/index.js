import React from "react";
import Dots from "shared/Dots";
import AOS from "aos";
import ContactsIllustartion from "assets/imageComponents/contactsIllustration";
import "aos/dist/aos.css";
import "./index.scss";

const Services = () => {
  AOS.init();
  const title = "contacts";
  return (
    <div className={`${title}-wrapper`} id={title}>
      <div className={title}>
        <div className="under-title">
          {title}
          <div className="title">{title}</div>
        </div>
        <Dots />
        <div className="content">
          <div className="left-side" data-aos="fade-up">
            <ContactsIllustartion className="contacts-illustration" />
          </div>
          <div className="right-side" data-aos="fade-left">
            <b>Lorem</b> ipsum dolor sit amet, consectetur adipiscing elit. Volutpat ultrices leo tellus sagittis, vitae
            habitasse lobortis blandit. Et massa sit ultricies urna, senectus at. Massa elit, magna ut ornare donec
            ornare ac tellus. Fames dolor ipsum justo orci leo condimentum egestas. Imperdiet lectus elementum amet
            elementum eu a volutpat, proin egestas. Egestas ultricies imperdiet elit nisi tortor dui. Ipsum diam quis
            amet dis tortor feugiat. Donec purus tempor, a enim, fusce. Nulla massa senectus vel bibendum. Consectetur
            maecenas ultricies dictum in purus malesuada. Et, magna vestibulum quis diam ipsum nisl aliquam et. Varius
            tempor urna, leo duis. Placerat facilisi cras tempus odio diam duis arcu. Commodo arcu, id fusce justo
            tempus placerat blandit. Tincidunt mollis luctus sit sed sagittis, dolor. Nulla malesuada mi, nulla lectus
            sit consequat sed. Euismod morbi ac varius odio et gravida tempor fermentum sit. Purus pellentesque eu sem
            sed.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
