//syntax: const { nestedObjectProp: { identifier } } = expression;
//nestedObjectProp is the name of the property that holds a nested object. 
//identifier is the property name to access from the nested object. 
//expression should evaluate to the destructured object.
const object={
    id:1,
    name:"sok",
    address:{
        street:"123 Main St",
        city :"pp"
    }
};
const {address:{street,city}}=object;
console.log(street," ",city);