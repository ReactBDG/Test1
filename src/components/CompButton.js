// export const CompButton = ({onClick}) => {
//   return (
//     <button
//       onClick={onClick}
//     >
//       Add Todo
//     </button>
//   );
// };

import {PureComponent} from 'react'
export class CompButton extends PureComponent {
  render () {
    return (
          <button
            onClick={this.props.onClick}
          >
            Add Todo{console.log('RENDER EXAV')}
          </button>
        );
  }
}