import * as React from 'react';

export const Avatar = ({ isSmall, backgroundColor }) => {
  return (
    <div className="avatar">
      <style jsx>{`
        .avatar {
          width: ${isSmall ? '44px' : '49px'};
          height: ${isSmall ? '44px' : '49px'};
          background-color: ${backgroundColor ? backgroundColor : '#DADBDE'};
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
};
