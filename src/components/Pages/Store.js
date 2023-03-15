import AvailableProduct from '../Product/AvailableProduct';
import classes from './Store.module.css';

const Store=(props)=>{
    return<div className={classes.body}>
        <h1 className={classes.music}>Music Albums</h1>
        <AvailableProduct/>
      
        </div>
        
    
}
export default Store;