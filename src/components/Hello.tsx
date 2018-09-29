import * as React from "react";

export interface Props {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

// interface State {
//   currentEnthusiasm: number;
// }

// class Hello extends React.Component<Props, State> {
//   constructor(props: Props) {
//     super(props);
//     this.state = { currentEnthusiasm: props.enthusiasmLevel || 1 };
//   }

//   onIncrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm + 1);
//   onDecrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm - 1);

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}
  function Hello({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: Props) {
    // if (enthusiasmLevel <= 1) {
    //   throw new Error('You could be a little more enthusiastic. :D');
    // }
    // const { name } = this.props;

    // if (this.state.currentEnthusiasm <= 0) {
    //   throw new Error('You could be a little more enthusiastic. :D');
    // }

    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(enthusiasmLevel)}
        </div>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
    );
  }

  // updateEnthusiasm(currentEnthusiasm: number) {
  //   this.setState({ currentEnthusiasm });
  // }
// }

export default Hello;

