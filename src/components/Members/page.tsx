import * as React from 'react';
import { MemberEntity } from '../../model';
import { memberAPI } from '../../api/Member';

interface State {
  members: MemberEntity[];
}

interface Props {
}

export class MembersPage extends React.Component<Props, State> {
  state = { members: [] };

  public componentDidMount() {
    memberAPI.fetchMembers()
      .then((members) => {
        this.setState({ members });
      });
  }

  public render() {
    return (
      <div className="row">
        <h2> Members Page</h2>
        <table className="table">
          <thead>
            {MemberHeader()}
          </thead>
          <tbody>
            {this.state.members.map(MemberRow)}
          </tbody>
        </table>
      </div>
    );
  }
}

const MemberHeader = () => {
  return (
    <tr>
      <th>Avatar</th>
      <th>Id</th>
      <th>Name</th>
    </tr>
  );
};

const MemberRow = (member: MemberEntity) => {
  return (
    <tr key={member.id}>
      <td>
        <img src={member.avatar_url} className="avatar" />
      </td>
      <td>
        <span>{member.id}</span>
      </td>
      <td>
        <span>{member.login}</span>
      </td>
    </tr>
  )
};
