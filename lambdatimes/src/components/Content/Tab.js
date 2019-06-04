import React from 'react';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
     let tabCheck = props.tab

     let selectedTab = props.nameSelected

     if (tabCheck === selectedTab) {
       let tabClass = 'tab active-tab'
     }
     
     else {
       let tabClass = 'tab'
     }
      

  return (
    <div

    
      className={tabClass}
      onClick={props.changeSelected(props.tab)}
      
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
