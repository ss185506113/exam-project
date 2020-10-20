import { observable, action, makeObservable, runInAction } from "mobx";
import { _allExamType,_allCourseType,_allCourseList,_getQuestionType,_addTest } from "@/api/exam";

class TestPaper {
  constructor() {
    makeObservable(this);
  }
  namespace = "testPaper";
  @observable examType = [];
  @observable courseType = [];
  @observable courseList=[];
  @observable realCourseList=[];
  @observable getQuestionList=[];
  //试卷类型
  @action getExamType = async () => {
    const result = await _allExamType();
    runInAction(() => {
      this.examType = result.data.data;
    });
  };
  // 课程类型
  @action allCourseType=async () =>
  {
    const result = await _allCourseType();
    runInAction(() => {
      this.courseType = result.data.data;
    });
  }
  // 课程列表
  @action allCourseList=async ()=>
  {
      const result=await  _allCourseList();
      runInAction(() => {
        result.data.exam.forEach((item)=>
      {
          this.realCourseList.push({
             key:item.user_id,
             name:item.title,
             grade:item.grade_name.map((ite) =>
             {
                 return ite+' '
             }),
             person:item.user_name,
             start_time:item.start_time,
             end_time:item.end_time,
          })
      })
      })
  }
  // 题目类型接口
  // @action getQuestionType=async ()=>
  // {
  //   const result=await  _getQuestionType();
  //   runInAction(() => {
  //     this.getQuestionList=result.data.data;
  //   });
  //   console.log(this.getQuestionList);
  // }
  @action addTest=async ()=>
  {
    const result=await  _addTest();
  }
}

export default new TestPaper();
