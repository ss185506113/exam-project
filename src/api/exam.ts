import request from '@/utils/request';

//获取考试类型接口
export function _allExamType()
{
    const url='/api/exam/examType';
    return request.get(url);
}
//获取课程接口
export function _allCourseType()
{
    const url='/api/exam/subject';
    return request.get(url);
}

//获取试卷列表接口
export function _allCourseList()
{
    const url='/api/exam/exam';
    return request.get(url)
}

//获取题目类型接口
export function _getQuestionType()
{
    const url='/exam/getQuestionsType';
    return request.get(url)
}

//添加试卷接口
export function _addTest(values:any){
    let url='/exam/exam'
    return request.post(url,values)
}
