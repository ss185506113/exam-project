import request from '../utils/request'

export function _grade(){
    const url = '/api/exam/getQuestionsType';

    return request.get(url);
}
export function _room(){
    const url = '/api/exam/subject';

    return request.get(url);
}