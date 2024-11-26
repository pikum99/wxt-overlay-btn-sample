import React, { useState } from "react";

export default () => {
  const [isModalVisible, setIsModalVisible] = useState(false); // モーダルの表示状態を管理
  const toggleModal = () => setIsModalVisible(!isModalVisible); // モーダルの表示/非表示を切り替える関数

  return (
    <div>
      <button onClick={toggleModal}>Toggle Modal</button>
      {isModalVisible && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <h1>Google Map</h1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5046.665334817212!2d139.74327229357905!3d35.685175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c0d02d8064d%3A0xd11a5f0b379e6db7!2z55qH5bGF!5e1!3m2!1sja!2sjp!4v1732361874542!5m2!1sja!2sjp"
              width="100%"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};
