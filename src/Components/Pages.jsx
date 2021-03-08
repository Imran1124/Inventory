import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


export const Category = () => {
    const [category, setCategory] = useState({
        category_name: '',
        created_by: 1,
        id: ''
    });
    let { id } = useParams();
    let history = useHistory();
    const HandleChange = (e) => {
        setCategory({
            ...category, [e.target.name]: e.target.value
        })
    }
    const changeid = (e) => {
        setCategory({
            ...category, id: e.target.value
        })
    }
    useEffect(() => {
        if ({ id } !== '') {
            editdata();
        }
        else {
            alert('edit');
        }
    }, []);
    const editdata = async () => {
        const result = await axios.get(`http://localhost:3000/invapi/category/${id}/`);
        setCategory(result.data);
        document.getElementById('sub').value = "UPDATE";
        console.log(category)
    }
    const submit = (e) => {
        e.preventDefault()
        if (category.category_name === '') {
            alert('All fields required')
        }
        else if (category.id !== '') {

            axios.put(`http://localhost:3000/invapi/category/${id}/`, category)
                .then(res => alert('Successfully Updated'));
            console.log(category);
            history.push('/listcategory');
        }
        else {
            axios.post('http://localhost:3000/invapi/category/create', category)
                .then(res => alert('Successfully Inserted'));
            console.log(category);
            history.push('/listcategory');
        }
    }
    return (
        <>
            <h3>Category</h3>
            <hr></hr>
            <form onSubmit={submit}>
                <div className="row">
                    <input type="text" value={category.id} name="id" onChange={changeid}></input>
                    <div className="col-md-6">
                        <label>Category Name</label>
                        <input type="text" className="form-control" name="category_name"
                            value={category.category_name} placeholder="Enter Category Name"
                            onChange={HandleChange} />
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-12">
                        <input type="submit" value="SUBMIT" className="btn btn-primary btn-sm" name='submit' id="sub"></input>
                    </div>
                </div>
            </form>
        </>
    )
}


export const ListCategory = (e) => {
    const [user, setUser] = useState([])
    useEffect(() => {
        loadData()
    }, []);

    const loadData = async () => {
        const result = await axios.get('http://localhost:3000/invapi/category');
        setUser(result.data.reverse());
    }
    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="card-header">Header
                        <Link to="/category" className="btn btn-outline-warning btn-sm" style={{ float: "right" }}>Add New</Link>
                    </div>
                    <div className="card-body">
                        <div className="table table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Category Name</th>
                                        <th>Date</th>

                                        <th>Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {user.map((item, index) => (
                                        <tr key={item.id}>
                                            <td>{index + 1}</td>
                                            <td>{item.category_name}</td>
                                            <td>{item.created_date}</td>
                                            <td>
                                                <Link to={"updateCategory/" + item.id} className="btn btn-outline-success btn-sm" >Edit</Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export const Brand = () => {
    const [brand, setBrand] = useState({
        brand_name: '',
        created_by: 1,
        category_id: ''
    });
    const [selectCategory, setSelectCategory] = useState([]);
    const history = useHistory();
    useEffect(() => {
        loadData()
    }, []);

    const loadData = async (e) => {
        const result = await axios.get('http://localhost:3000/invapi/category');
        setSelectCategory(result.data);
        console.log(selectCategory);
    }

    const handleChange = (e) => {
        setBrand({ ...brand, [e.target.name]: e.target.value });
        console.log(brand);
    }
    const submit = (e) => {
        e.preventDefault();
        if (brand.brand_name === '' || brand.category_id === '0') {
            alert('All fields required')
        }
        else {
            axios.post('http://localhost:3000/invapi/brand/create', brand)
                .then(res => alert('Successfully Inserted'));
            console.log(brand);
            history.push('/listbrand');
        }
    }
    return (
        <>
            <form onSubmit={submit}>
                <div className="row">
                    <div className="col-md-6">
                        <label>Category Name</label>
                        <select className="form-control" onChange={handleChange} name="category_id">
                            <option value="">--Select--</option>
                            {selectCategory.map((e, key) => {
                                return <option key={key} value={e.id}>{e.category_name}</option>
                            })}
                        </select>
                    </div>

                    <div className="col-md-6">
                        <label>Brand Name</label>
                        <input type="text" className="form-control" name="brand_name" value={brand.brand_name} onChange={handleChange}></input>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-12">
                        <input type="submit" className="btn btn-info btn-sm" value="SUBMIT" ></input>
                    </div>
                </div>
            </form>
        </>
    )
}


export const ListBrand = (e) => {
    const [user, setUser] = useState([])
    useEffect(() => {
        loadData()
    }, []);

    const loadData = async () => {
        const result = await axios.get('http://localhost:3000/invapi/catorbrand');
        setUser(result.data.reverse());
    }
    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="card-header">Header
                        <Link to="/brand" className="btn btn-outline-warning btn-sm" style={{ float: "right" }}>Add New</Link>
                    </div>
                    <div className="card-body">
                        <div className="table table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Category</th>
                                        <th>Brand Name</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                        <th>Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {user.map((item, index) => (
                                        <tr key={item.tbid}>
                                            <td>{index + 1}</td>
                                            <td>{item.category_name}</td>
                                            <td>{item.brand_name}</td>
                                            <td>{item.cby}</td>
                                            <td>{item.date}</td>
                                            <td>
                                                <Link to={"editbrand/" + item.tbid} className="btn btn-outline-success btn-sm">Edit</Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export const EditBrand = () => {
    const [brand, setBrand] = useState({
        brand_name: '',
        category_id: ''
    });
    const [selectCategory, setSelectCategory] = useState([]);
    const { id } = useParams();
    const history = useHistory();
    useEffect(() => {
        loadData();
        editdata();
    }, []);

    const loadData = async (e) => {
        const result = await axios.get('http://localhost:3000/invapi/category');
        setSelectCategory(result.data);
        console.log(selectCategory);
    }
    const editdata = async (e) => {
        const result = await axios.get(`http://localhost:3000/invapi/catorbrand/${id}`);
        setBrand({
            category_id: result.data.category_id, brand_name: result.data.brand_name,
            category_name: result.data.category_name
        });
        console.log(brand);
    }

    const handleChange = (e) => {
        setBrand({ ...brand, [e.target.name]: e.target.value });
        console.log(brand);
    }
    const submit = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:3000/invapi/brand/${id}/`, brand)
            .then(res => alert('Successfully Inserted'));
        history.push('/listbrand');
        console.log(brand);
    }
    return (
        <>
            <form onSubmit={submit}>
                <div className="row">
                    <div className="col-md-6">
                        <label>Category Name</label>
                        <select className="form-control" onChange={handleChange} name="category_id">
                            <option value={brand.tbid}>{brand.category_name}</option>
                            {selectCategory.map((e, key) => {
                                return <option key={key} value={e.id}>{e.category_name}</option>
                            })}
                        </select>
                    </div>

                    <div className="col-md-6">
                        <label>Brand Name</label>
                        <input type="text" className="form-control" name="brand_name" value={brand.brand_name} onChange={handleChange}></input>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-12">
                        <input type="submit" className="btn btn-info btn-sm" value="SUBMIT" ></input>
                    </div>
                </div>
            </form>
        </>
    )
}

/////////////////////////
export const Product = () => {
    const [product, setProduct] = useState({
        category_id: '', brand_id: '', product_name: '',
        product_desc: '', quantity: '', unit: '',
        base_price: '', tax: '', p_min_order: ''
    });

    const [selectBrand, setBrandId] = useState([]);
    const [selectCategory, setCategoryId] = useState([]);

    let history = useHistory();
    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        loadCategory();
    }, []);

    const loadCategory = async (e) => {
        const result = await axios.get('http://localhost:3000/invapi/category');
        setCategoryId(result.data);
        console.log(selectCategory);
    }

    const changeCategory = async (e) => {
        const result = await axios.get(`http://localhost:3000/invapi/pro_or_brand/${e.target.value}`);
        setBrandId(result.data);
        setProduct({ ...product, category_id: e.target.value });
        console.log(selectBrand);
    }
    const changeBrand = (e) => {
        setProduct({ ...product, brand_id: e.target.value })
    }

    const submit = async (e) => {

        e.preventDefault();
        const a = await axios.post(`http://localhost:3000/invapi/product/create`, product)
            .then(res => res.data.id, alert('success'));
        history.push('/product');
        console.log(a);
        console.log(product);
    }
    return (
        <>
            <h3>Category</h3>
            <hr></hr>
            <form onSubmit={submit}>
                <div className="row">
                    <div className="col-md-3">
                        <label>Category Name</label>
                        <select className="form-control" onChange={changeCategory} name="category_id">
                            <option value="">--Select--</option>
                            {selectCategory.map((e, key) => {
                                return <option key={key} value={e.id}>{e.category_name}</option>
                            })}
                        </select>
                    </div>
                    <div className="col-md-3">
                        <label>Brand Name</label>
                        <select className="form-control" name="brand_id" onChange={changeBrand}>
                            <option value="">--Select--</option>
                            {selectBrand.map((e, key) => {
                                return <option key={key} value={e.bid}>{e.brand_name}</option>
                            })}
                        </select>
                    </div>
                    <div className="col-md-3">
                        <label>Product Name</label>
                        <input type="text" className="form-control" name="product_name"
                            value={product.product_name} onChange={handleChange} placeholder="Product Name"></input>
                    </div>
                    <div className="col-md-3">
                        <label>Product Description</label>
                        <input type="text" className="form-control" name="product_desc"
                            value={product.product_desc} onChange={handleChange} placeholder="Product Description"></input>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-3">
                        <label>Quantity</label>
                        <input type="text" className="form-control" name="quantity"
                            value={product.quantity} onChange={handleChange} placeholder="Quantity"></input>
                    </div>
                    <div className="col-md-3">
                        <label>Unit</label>
                        <input type="text" className="form-control" name="unit"
                            value={product.unit} onChange={handleChange} placeholder="Unit"></input>
                    </div>
                    <div className="col-md-3">
                        <label>Base Price</label>
                        <input type="text" className="form-control" name="base_price"
                            value={product.base_price} onChange={handleChange} placeholder="Base Price"></input>
                    </div>
                    <div className="col-md-3">
                        <label>Tax</label>
                        <input type="text" className="form-control" name="tax"
                            value={product.tax} onChange={handleChange} placeholder="Tax"></input>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-3">
                        <label>Minimun Order</label>
                        <input type="text" className="form-control" name="p_min_order"
                            value={product.p_min_order} onChange={handleChange} placeholder="Minimum"></input>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-12">
                        <input type="submit" value="SUBMIT" className="btn btn-primary btn-sm" name='submit' id="sub"></input>
                    </div>
                </div>
            </form>
        </>
    )
}

export const ListProduct = (e) => {
    const [productList, setProductList] = useState([])
    useEffect(() => {
        loadData()
    }, []);

    const loadData = async () => {
        const result = await axios.get('http://localhost:3000/invapi/product');
        setProductList(result.data.reverse());
    }
    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="card-header">Header
                        <Link to="/product" className="btn btn-outline-warning btn-sm" style={{ float: "right" }}>Add New</Link>
                    </div>
                    <div className="card-body">
                        <div className="table table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Category</th>
                                        <th>Brand Name</th>
                                        <th>Product</th>
                                        <th>Quantity</th>
                                        <th>Unit</th>
                                        <th>Price</th>
                                        <th>Date</th>
                                        <th>Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {productList.map((item, index) => (
                                        <tr key={item.pid}>
                                            <td>{index + 1}</td>
                                            <td>{item.tcname}</td>
                                            <td>{item.tbname}</td>
                                            <td>{item.product_name}</td>
                                            <td>{item.quantity}</td>
                                            <td>{item.unit}</td>
                                            <td>{item.base_price}</td>
                                            <td>{item.tpdate}</td>
                                            <td>
                                                <Link to={"productedit/" + item.pid} className="btn btn-outline-success btn-sm">Edit</Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}


export const ProductEdit = () => {
    const [product, setProduct] = useState({
        category_id: '', brand_id: '', product_name: '',
        product_desc: '', quantity: '', unit: '',
        base_price: '', tax: '', p_min_order: '',
        tcname: '', tbname: ''
    });

    const [selectCategory, setCategoryId] = useState([]);
    const [selectBrand, setBrandId] = useState([]);
    let { id } = useParams();
    let history = useHistory();
    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        loadCategory();
        editdata();
    }, []);

    const editdata = async (e) => {

        const result = await axios.get(`http://localhost:3000/invapi/product/${id}`);
        setProduct(result.data);
        console.log(product);
    }

    const loadCategory = async (e) => {
        const result = await axios.get('http://localhost:3000/invapi/category');
        setCategoryId(result.data);
        console.log(selectCategory);
    }

    const changeCategory = async (e) => {
        const result = await axios.get(`http://localhost:3000/invapi/pro_or_brand/${e.target.value}`);
        setBrandId(result.data);
        setProduct({ ...product, category_id: e.target.value });
        console.log(selectBrand);
    }
    const changeBrand = (e) => {
        setProduct({ ...product, brand_id: e.target.value })
    }

    const submit = async (e) => {

        e.preventDefault();
        const a = await axios.put(`http://localhost:3000/invapi/updateproduct/${id}/`, product)
            .then(res => res.data.id, alert('success'));
        history.push('/productlist');
        console.log(a);
        console.log(product);
    }
    return (
        <>
            <h3>Category</h3>
            <hr></hr>
            <form onSubmit={submit}>
                <div className="row">
                    <div className="col-md-3">
                        <label>Category Name</label>
                        <select className="form-control" onChange={changeCategory} name="category_id">
                            <option value={product.category_id}>{product.tcname}</option>
                            <option value="">--Select--</option>
                            {selectCategory.map((e, key) => {
                                return <option key={key} value={e.id}>{e.category_name}</option>
                            })}
                        </select>
                    </div>
                    <div className="col-md-3">
                        <label>Brand Name</label>
                        <select className="form-control" name="brand_id" onChange={changeBrand}>
                            <option value={product.brand_id}>{product.tbname}</option>
                            <option value="">--Select--</option>
                            {selectBrand.map((e, key) => {
                                return <option key={key} value={e.bid}>{e.brand_name}</option>
                            })}
                        </select>
                    </div>
                    <div className="col-md-3">
                        <label>Product Name</label>
                        <input type="text" className="form-control" name="product_name"
                            value={product.product_name} onChange={handleChange} placeholder="Product Name"></input>
                    </div>
                    <div className="col-md-3">
                        <label>Product Description</label>
                        <input type="text" className="form-control" name="product_desc"
                            value={product.product_desc} onChange={handleChange} placeholder="Product Description"></input>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-3">
                        <label>Quantity</label>
                        <input type="text" className="form-control" name="quantity"
                            value={product.quantity} onChange={handleChange} placeholder="Quantity"></input>
                    </div>
                    <div className="col-md-3">
                        <label>Unit</label>
                        <input type="text" className="form-control" name="unit"
                            value={product.unit} onChange={handleChange} placeholder="Unit"></input>
                    </div>
                    <div className="col-md-3">
                        <label>Base Price</label>
                        <input type="text" className="form-control" name="base_price"
                            value={product.base_price} onChange={handleChange} placeholder="Base Price"></input>
                    </div>
                    <div className="col-md-3">
                        <label>Tax</label>
                        <input type="text" className="form-control" name="tax"
                            value={product.tax} onChange={handleChange} placeholder="Tax"></input>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-3">
                        <label>Minimun Order</label>
                        <input type="text" className="form-control" name="p_min_order"
                            value={product.p_min_order} onChange={handleChange} placeholder="Minimum"></input>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-12">
                        <input type="submit" value="UPDATE" className="btn btn-primary btn-sm" name='submit' id="sub"></input>
                    </div>
                </div>
            </form>
        </>
    )
}

export const AddTest = () => {
    const [myState, setMyState] = useState({ name: '', email: '' });
    const [addData, setData] = useState([]);

    const handlechange = (e) => {
        setMyState({
            ...myState, [e.target.name]: e.target.value
        })
    }
    const addNew = (e) => {
        setData(
            [...addData, { ...myState, [e.target.name]: e.target.value }]
        )
        var i = 1;
        console.log(addData)
    }
    const handleRemove = (index) => {
        const values = [...addData];
        values.splice(index, 1);
        setData(values);
    }
    const onSubmit = (e) => {
        console.log(addData)
    }
    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    <input type="text" className="form-control" name="name" value={myState.name} onChange={handlechange}></input>
                </div>
                <div className="col-md-6">
                    <input type="text" className="form-control" name="email" value={myState.email} onChange={handlechange}></input>
                </div>
            </div>
            <hr></hr>
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-bordered">
                        <tr>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Remove</td>
                        </tr>
                        {addData.map((item, index) => (
                            <tr key={item.name}>

                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td><button onClick={() => handleRemove(index)} className="btn btn-danger btn-sm">Remove</button></td>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col-md-1">
                    <button type="button" className="btn btn-info btn-sm" onClick={addNew}>Add</button>
                </div>
                <div className="col-md-1">
                    <button type="button" className="btn btn-info btn-sm" onClick={onSubmit}>Submit</button>
                </div>
            </div>
        </>
    )
}

export const AddTextBox = () => {
    const [inputField, setInput] = useState([
        { name: "", email: "" }
    ]);

    const handleChange = (index, e) => {
        const values = [...inputField];
        values[index][e.target.name] = e.target.value;
        setInput(values);
    }

    const adddata = (e) => {
        setInput([...inputField, { name: '', email: '' }])
    }

    const handleRemove = (index) => {
        const values = [...inputField];
        values.splice(index, 1);
        setInput(values);
    }

    const onSubmit = (e) => {
        console.log(inputField)
    }
    return (
        <>

            {inputField.map((field, index) => (
                <div className="row" key={index}>
                    <div className="col-md-4">
                        <input type="text" className="form-control"
                            name="name"
                            value={field.name}
                            onChange={e => handleChange(index, e)} />
                    </div>
                    <div className="col-md-4">
                        <input type="text" className="form-control"
                            name="email"
                            value={field.email}
                            onChange={e => handleChange(index, e)} />
                        <br></br>
                    </div>
                    <div className="col-md-2">
                        <button onClick={() => handleRemove(index)} className="btn btn-info btn-sm">--</button>
                    </div>
                </div>

            ))}

            <div className="row">
                <br></br>
                <div className="col-md-3">
                    <button type="button" className="btn btn-info btn-sm" onClick={adddata}>add</button>
                    <button type="button" className="btn btn-info btn-sm" onClick={onSubmit}>SUBMIT</button>
                </div>
            </div>
        </>
    )
}


export const Purchase = () => {
    const [myState, setMyState] = useState({ 
        product_id: '', rate:'', quantity:'', unit:'', taxAmount:'',total_rate:'', status:'1'
    });
    const [addData, setData] = useState([]);

    useEffect(() => {
        
    }, []);
    const changeHandle = (e) => {
        setMyState({
            ...myState, [e.target.name]: e.target.value
        })
    }
    var tamt = useRef(null)
    const changeTamount = (e) =>{
        setMyState({
            ...myState,total_rate:tamt.current?.value
        })
    }
    const changeTax = (e) =>{
        
        var rate=parseFloat( document.getElementById('rate').value);
        var qty=parseFloat(document.getElementById('qty').value);
        var total1=rate*qty;
        document.getElementById('total_amount').value=total1;
        var taxAmount=parseFloat(document.getElementById('tax').value);
        var taxAmt=total1*taxAmount/100;
        //document.getElementById('taxAmount').value=taxAmt;
        //changeTamount();
        setMyState({
            ...myState,tax:e.target.value, total_rate:tamt.current?.value, taxAmount:taxAmt
        })
        
    }
    const click = ()=>{
        

    }
    const addNew = (e) => {
        setData(
            [...addData, { ...myState, [e.target.name]: e.target.value }]
        )

        var t=parseFloat(document.getElementById('taxAmount').value);
        var t2 = parseFloat(document.getElementById('total_amount').value);
        for(var i=0; i< [...addData].length; i++){
             t2 +=parseFloat(document.getElementById('ttotal').innerHTML[i]);
             t +=parseFloat(document.getElementById('taxtotal').innerHTML[i]);
        }
        document.getElementById('ttax').value=t;
        document.getElementById('totamt').value=t2;
        document.getElementById('grandTotal').value=t2+t;
        console.log(addData)
    }
    const handleRemove = (index) => {
        const values = [...addData];
        values.splice(index, 1);
        setData(values);
        var t=0;
        var t2 = 0;
        for(var i=1; i< [...addData].length; i++){
             t2 +=parseFloat(document.getElementById('ttotal').innerHTML);
             //t =parseFloat(document.getElementById('ttax').value)-parseFloat(document.getElementById('taxAmount').value);
             t += parseFloat(document.getElementById('taxtotal').innerHTML)
        }
        document.getElementById('ttax').value=t;
        document.getElementById('totamt').value=t2;
        document.getElementById('grandTotal').value=t2+t;
    }

    return (
        <>
            <div className="row">
                
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-6">
                            <label>Vendors Name</label>
                            <input type="text" className="form-control" name="vendor_id"
                                onChange={changeHandle} />
                        </div>
                        <div className="col-md-6">
                            <label>Purchase No</label>
                            <input type="text" className="form-control" name="purchase_no"
                                onChange={changeHandle} />
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-2">
                            <label>Product Id</label>
                            <input type="text" className="form-control" name="product_id" 
                            value={myState.product_id}
                            onChange={changeHandle} />
                        </div>
                        <div className="col-md-2">
                            <label>Unit</label>
                            <input type="text" className="form-control" name="unit" value={myState.unit}
                                onChange={changeHandle} />
                        </div>
                        <div className="col-md-2">
                            <label>Rate</label>
                            <input type="text" className="form-control" id="rate" name="rate" value={myState.rate}
                                onChange={changeHandle} />
                        </div>
                        <div className="col-md-2">
                            <label>Quantity</label>
                            <input type="text" className="form-control" id="qty" name="quantity" value={myState.quantity}
                                onChange={changeHandle} />
                        </div>
                        <div className="col-md-2">
                            <label>Tax</label>
                            <input type="text" className="form-control" id="tax" name="tax"
                            value={myState.tax}
                            onChange={(e)=>changeTax(e)} />
                        </div>
                        <div className="col-md-1">
                            <label>Total</label>
                            <input type="text" className="form-control" ref={tamt} id="total_amount" 
                            name="total_rate"
                            value={myState.total_rate}
                            onChange={(e)=>changeTamount(e)} />
                        </div>
                        <div className="col-md-1">
                            <label>Add</label>
                            <button className="btn btn-info btn-sm" onClick={addNew}>Add</button>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-12">
                            <table className="table table-bordered">
                                <tr>
                                    <td>Product Id</td>
                                    <td>Amount</td>
                                    <td>Quantity</td>
                                    <td>Unit</td>
                                    <td>Tax</td>
                                    <td>Total Amount</td>
                                    <td>Remove</td>
                                </tr>
                                {addData.map((item, index) => (
                                    <tr key={item.product_id}>

                                        <td>{item.product_id}</td>
                                        <td>{item.rate}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.unit}</td>
                                        <td id="taxtotal">{item.taxAmount}</td>
                                        <td id="ttotal">{item.total_rate}</td>
                                        <td><button onClick={() => handleRemove(index)} className="btn btn-danger btn-sm">Remove</button></td>
                                    </tr>
                                ))}
                            </table>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-md-9">
                                <input type="text" id="taxAmount" value={myState.taxAmount}
                                onChange={(e)=>{setMyState({...myState,taxAmount:e.target.value})}}/>
                        </div>
                        <div className="col-md-1">
                            <label>Amount</label>
                        </div>
                        <div className="col-md-2">
                            <input type="text" id="totamt" className="form-control"/>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-9">

                        </div>
                        <div className="col-md-1">
                            <label>Amount</label>
                        </div>
                        <div className="col-md-2">
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-9">

                        </div>
                        <div className="col-md-1">
                            <label>Amount</label>
                        </div>
                        <div className="col-md-2">
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-9">

                        </div>
                        <div className="col-md-1">
                            <label>Total Tax</label>
                        </div>
                        <div className="col-md-2">
                            <input type="text" id="ttax" className="form-control"/>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-9">

                        </div>
                        <div className="col-md-1">
                            <label>Amount</label>
                        </div>
                        <div className="col-md-2">
                            <input type="text" id="grandTotal" className="form-control"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}