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
            <p>モーダルの内容</p>
          </div>
        </div>
      )}
    </div>
  );
};
