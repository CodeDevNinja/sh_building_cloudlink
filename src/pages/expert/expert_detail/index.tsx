import React from 'react';
import './index.scss'; // Import your CSS file for styling
import logo from '../../../static/images/1.png';
// import Tabbar from "../../index/index";

const expertData = {
  name: '梁思成',
  photo: logo, // Replace with the image URL of the expert
  experiences: '梁思成的父亲梁启超，是清末改革家，为躲避清政府迫害而出国，所以梁思成出生于日本东京。1912年，辛亥革命后，梁思成随父母从日本回国，在北京崇德国小及汇文中学（1912—1914）就学。1915年，入北平清华学校（清华大学前身），1923年毕业于清华学校高等科。1924年，和林徽因一起赴美国费城宾州大学建筑系学习，1927年获得学士和硕士学位，又去哈佛大学学习建筑史，研究中国古代建筑（肄业）。',
  mainWorks: '王国维纪念碑 1929年 位于清华大学第一教室楼北端后山之麓',
  honors: '1963年，梁思成设计了扬州“鉴真和尚纪念堂”。建筑于1973年建成，1984年，荣获中国优秀建筑设计一等奖。',
  socialEvaluation: '美国学者费正清对梁思成在抗战时期的工作作了如下的评价：“二战”中，我们在中国的西部再度重逢，他们却都已成了半残的病人，但仍在不顾一切地、在极端艰苦的条件下致力于学术。当时林徽因身患肺结核，梁思成则因为青年时代一次车祸的后遗症而导致脊椎受伤。然而，无论疾病还是艰难的生活都无损于他们对自己的开创性研究工作的热情。就是在战时的这一时期，梁思成用英文写成了《图像中国建筑史》。在我们的心目中，他们是不畏困难、献身科学的崇高典范',
};

const ExpertDetail = () => {
  return (
    <div className="expert-detail">
      <div className="expert-header">
        <img src={expertData.photo} alt={expertData.name} />
        <h2>{expertData.name}</h2>
      </div>
      <div className="expert-content">
        <div className="section">
          <h3>人物经历</h3>
          <p>{expertData.experiences}</p>
        </div>
        <div className="section">
          <h3>主要作品</h3>
          <p>{expertData.mainWorks}</p>
        </div>
        <div className="section">
          <h3>主要荣誉</h3>
          <p>{expertData.honors}</p>
        </div>
        <div className="section">
          <h3>社会评价</h3>
          <p>{expertData.socialEvaluation}</p>
        </div>
      </div>
      {/* <Tabbar></Tabbar> */}
    </div>
  );
};

export default ExpertDetail;
