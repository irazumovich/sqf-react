import React, {useCallback, useEffect, useRef} from 'react';
import {shape, bool, string, arrayOf, obj} from 'prop-types';
import './goal.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileDownload, faFileUpload} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const Goal = ({goals, match}) => {

    const fileRef = useRef(null);

    useEffect(() => {
        console.log('id', match);
    }, [match]);

    const uploadFile = useCallback(e => {
        console.log(e.target.files)
        console.log('goals', goals);
        const goalId = goals[match.params.id].id;
        const token = cookies.get('access_token',  { path: '/' });
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const formData = new FormData();
        formData.append("file", e.target.files[0]);
        formData.append("goalId", goalId);
        axios.post(`${process.env.BACKEND_APP_HOST}/goals/result`, formData);
    }, [match, goals]);

    const startUploading = useCallback(() => fileRef.current.click(), [
        fileRef
    ]);

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
                <div className="goal__additional">
                    Дополниельные материалы: <br/>
                    {goals[match.params.id] && goals[match.params.id].additional_materials}
                </div>
                <div className="goal__status">
                    Статус: <br/>
                    {goals[match.params.id] && goals[match.params.id].status}
                </div>
            </div>
        </div>
    );
};

export default Goal
