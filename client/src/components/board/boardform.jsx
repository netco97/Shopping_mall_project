import { useState ,useEffect } from "react";
import styles from "./boardform.module.css";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Parser from 'html-react-parser';
import Axios from 'axios';


export const Boardform = () =>{   
    const [movieContent, setMovieContent] = useState({
        title: '',
        content: ''
    })

    const [viewContent, setViewContent] = useState([]);

    const getValue = (e) =>{
        const {name,value} = e.target;
        setMovieContent({
            ...movieContent,
            [name]: value
        })
        console.log(movieContent);
    }

    useEffect(()=>{
        Axios.get('http://localhost:8000/board/get').then((response)=>{
            setViewContent(response.data);
        })
    },[viewContent]);

    const submitReview = ()=>{
        Axios.post('http://localhost:8000/board', {
          title: movieContent.title,
          content: movieContent.content
        }).then(()=>{
            alert("등록 되셨습니다.");
        })
      };

    return (
        <div className={styles.body}>
      <h1>Review</h1>
      <div className={styles.container}>
        {viewContent.map(e=>
            <div>
                <h2>{e.title}</h2>
                <div>
                    {Parser(e.content)}
                </div>
            </div>
            )}
      </div>
      <div className={styles.wrapper}>
        <input 
            className={styles.input}
            type='text' 
            placeholder='제목'
            onChange={getValue}
            name='title'
        />
        <CKEditor
          editor={ClassicEditor}
          data="<p>여기는 게시판입니다.</p>"
          onReady={editor => {
            // You can store the "editor" and use when it is needed.
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
            setMovieContent({
              ...movieContent,
              content: data
            })
            console.log(movieContent);
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
        />
      </div>
      <button className={styles.button}
      onClick={submitReview}>입력</button>
    </div>
    )
}