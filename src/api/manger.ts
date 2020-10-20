import  request from "@/utils/request"
export function _grade(){
    let url = "/manger/grade"

    return request.get("/api/manger/grade")
}