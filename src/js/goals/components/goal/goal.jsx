import React, {useCallback, useEffect, useRef, useState} from 'react';
import {shape, bool, string, arrayOf, obj} from 'prop-types';
import './goal.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileDownload, faFileUpload} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const Goal = ({goals, match}) => {

    const fileRef = useRef(null);

    const [comment, setComment] = useState('');

    useEffect(() => {
        console.log('id', match);
    }, [match]);

    const uploadFile = useCallback(e => {
        console.log(e.target.files)
        console.log('goals', goals);
        const goalId = goals[match.params.id].id;
        const token = cookies.get('access_token', {path: '/'});
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const formData = new FormData();
        formData.append("file", e.target.files[0]);
        formData.append("goalId", goalId);
        axios.post(`${process.env.BACKEND_APP_HOST}/goals/result`, formData);
    }, [match, goals]);

    const startUploading = useCallback(() => fileRef.current.click(), [
        fileRef
    ]);

    const changeStatus = (e) => {
        const {id, name} = e.target;
        const token = cookies.get('access_token', {path: '/'});
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        axios.put(`${process.env.BACKEND_APP_HOST}/goals/${id}/status`, {
            status: name,
            comment: comment,
        });
    };

    return (
        <div className="goal__container">
            <div className='goal__content'>
                <div className="goal__title">
                    <span>{goals[match.params.id] && goals[match.params.id].name}</span>
                    <div className="goal__download">
                        <div>
                            <a href={goals[match.params.id] && goals[match.params.id].task_file}
                               title='Скачать задание'>
                                <FontAwesomeIcon icon={faFileDownload} size='2x'/>
                            </a>
                        </div>
                        <div>
                            <input
                                type="file"
                                ref={fileRef}
                                onChange={uploadFile}
                                className="goal__file"
                            />
                            <FontAwesomeIcon icon={faFileUpload} size='2x' title='Отправить решение'
                                             onClick={startUploading}
                            />
                        </div>
                    </div>
                </div>
                <div className="goal__description">
                    Описание: <br/>
                    {goals[match.params.id] && goals[match.params.id].description}
                </div>
                {goals[match.params.id] && goals[match.params.id].additional_materials ?
                    <div className="goal__additional">
                        Дополнительные материалы: <br/>
                        {goals[match.params.id].additional_materials}
                    </div> : ''
                }
                <div className="goal__status">
                    Статус: <br/>
                    {goals[match.params.id] && goals[match.params.id].status}
                </div>
                {
                    goals[match.params.id] && goals[match.params.id].assess_goals ?
                        <div className="goal__assesses">
                            Проверьте других пользователей:
                            {goals[match.params.id].assess_goals.map((goal, i) => (
                                <div key={goal.id} className='goal__assess-item'>
                                    <div className='goal__row'>
                                        <a href={goals[match.params.id] && goals[match.params.id].assess_goals && goals[match.params.id].assess_goals[i].result_file}
                                           title='Скачать решение для проверки'>
                                            <FontAwesomeIcon icon={faFileDownload} size='1x'/>
                                        </a>
                                        <button className='goal__button' id={goal.id} name='Выполнена'
                                                onClick={e => changeStatus(e)}>
                                            Отметить как выполненное
                                        </button>
                                        <button className='goal__button' id={goal.id} name='Дорабатывается'
                                                onClick={e => changeStatus(e)}>
                                            На доработку
                                        </button>
                                    </div>
                                    <textarea
                                        placeholder='Комментарий' value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                    />
                                </div>
                            ))}
                        </div> : ''
                }
            </div>
        </div>
    );
};

export default Goal
