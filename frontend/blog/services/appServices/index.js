import HttpServices from "../httpServices";
import { ENDPOINTS } from "../helpers/endpoints";
import { header } from "../helpers/constants";

class AppService extends HttpServices {
  static getAllPostsWithCategories(categoryId) {
    return this.get(`${ENDPOINTS.seekblog}?${ENDPOINTS.seekcategories}=${categoryId}`, header);
  }

  static getCategoryById(categoryId) {
    return this.get(`${ENDPOINTS.seekcategories}/${categoryId}`, header);
  }


  static getAllPosts(perPage) {
    return this.get(`${ENDPOINTS.seekblog}?per_page=${perPage}`, header);
  }

  static getAllPopularPosts(perPage) {
    return this.get(`${ENDPOINTS.seekblog}?orderby=comment_count&per_page=${perPage}`, header);
  }

  static getAllCategoriesWithPage(noOfPosts = 1) {
    return this.get(`${ENDPOINTS.seekcategories}?per_page=${noOfPosts}`, header);
  }

  static getAllCategories() {
    return this.get(`${ENDPOINTS.seekcategories}`, header);
  }

  static getMediaById(mediaId) {
    return this.get(`${ENDPOINTS.media}/${mediaId}`, header);
  }

  static postComment(payload) {
    return this.post(ENDPOINTS.comments, header, { ...payload });
  }

  static getCommentsListByPostId(postId, paginationNumber) {
    return this.get(`${ENDPOINTS.comments}?post=${postId}&per_page=${paginationNumber}&parent=0`, header);
  }

  static getCommentsRepliesByCommentId(commentId) {
    return this.get(`${ENDPOINTS.comments}?parent=${commentId}`, header);
  }

  static getUserWithId(userId) {
    return this.get(`${ENDPOINTS.users}/${userId}`, header);
  }

  static subscribeEmail(payload) {
    return this.post(ENDPOINTS.subscribeEmail, header, { ...payload });
  }

  static getMenus(menuName = "") {
    return this.post(`${ENDPOINTS.getMenus}/${menuName}`, header, {});
  }

  static searchPosts(query = "a") {
    return this.get(`${ENDPOINTS.seekblog}?search=${query}`, header);
  }
}



export default AppService;
