import React from 'react';
import faker from 'faker';
import SimpleComment from './SimpleComment';
import ApproveCard from './ApproveCard';

const CommentApp = () => {
  return (
    <div className="ui container grid">
      <div className="eight wide column">
        <ApproveCard actions={['Approve', 'Reject']}>
          <SimpleComment
            author={faker.name.firstName()}
            avatar={faker.image.avatar()}
            text={faker.lorem.words()}
          />
        </ApproveCard>
        <ApproveCard />
      </div>
      <div className="eight wide column">
        <div className="ui comments">
          <SimpleComment
            author={faker.name.firstName()}
            avatar={faker.image.avatar()}
            text={faker.lorem.words()}
          />
          <SimpleComment
            author={faker.name.firstName()}
            avatar={faker.image.avatar()}
            text={faker.lorem.words()}
          />
          <SimpleComment
            author={faker.name.firstName()}
            avatar={faker.image.avatar()}
            text={faker.lorem.words()}
          />
          <SimpleComment
            author={faker.name.firstName()}
            avatar={faker.image.avatar()}
            text={faker.lorem.words()}
          />
          <SimpleComment
            author={faker.name.firstName()}
            avatar={faker.image.avatar()}
            text={faker.lorem.words()}
          />
        </div>
      </div>
    </div>
  );
};

export default CommentApp;
