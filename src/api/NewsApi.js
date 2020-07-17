  
import Api from "./Api";

class NewsApi {


  getAllNews() {
    return Api.get('/news?type=general');
  }

  getSportNews() {
    return Api.get('/news?type=sport');
  }

  getHealthNews() {
    return Api.get('/news?type=health');
  }

  getTechNews() {
    return Api.get('/news?type=technology');
  }

  getEntertainmentNews() {
    return Api.get('/news?type=entertainment');
  }

  getSENews() {
    return Api.get('/news?type=se');
  }

}

export default new NewsApi();