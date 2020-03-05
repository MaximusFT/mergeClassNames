# mergeClassNames
Merges class names, whatever the format.
Can be a single class, a string with multiple classes separated with space, an array of classes
Removes duplicates

## Install
```bash
# Install using npm
npm install mergeclassnames --save
```

## Use
```jsx
import mergeClassNames from 'mergeclassnames';

export default (props) => {
    const { someClassNames } = props;
    /* Expample:
        someClassNames = ['a', false, 'b', 'c', null, ['d', null], () => {}, 'e', undefined, 'c', ['f', false]];
    */
    return (
      <div className="my-component">
        <SomeElement
            className={mergeClassNames('someHardCoreClass', someClassNames)}
        />
        {/*
        Output: <SomeElement className="someHardCoreClass a b c d e f" />
        */}
      </div>
    );
  }
}
```