import React from 'react';
import './index.scss'; // Import your CSS file for styling
import logo from '../../../static/images/1.png';
import Taro from '@tarojs/taro'

const experts = [
  {
    id: 1,
    name: '梁思成',
    title: '建筑学家',
    profile: '毕生致力于中国古代建筑的研究和保护，是建筑历史学家、建筑教育家和建筑师，被誉为中国近代建筑之父',
    tags: ['一代宗师', '学术巨匠'],
    image: logo, 
    // Replace with the image URL of the expert
  },
  {
    id: 2,
    name: 'John Doe',
    title: 'Senior Architect',
    profile: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    tags: ['Building Design', 'Green Architecture'],
    image: 'expert1.jpg', 
    // Replace with the image URL of the expert
  }
  // Add more experts here
];

const ExpertList = () => {
  const go2Index_2 = () => {
		Taro.navigateTo({
			url: '/pages/expert/expert_detail/index'
		})
	} 

  return (
    <div>
    <div className="expert-list">
      {experts.map((expert) => (
        <div className="expert-card" key={expert.id} onClick={go2Index_2}>
          <div className="expert-image">
            <img src={expert.image} alt={expert.name} />
          </div>
          <div className="expert-details">
            <h3 className="expert-name">{expert.name}</h3>
            <p className="expert-title">{expert.title}</p>
            <p className="expert-profile">{expert.profile}</p>
            <div className="expert-tags">
              {expert.tags.map((tag) => (
                <span key={tag} className="expert-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ExpertList;
