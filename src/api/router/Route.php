<?php


/**
 * Class Route
 * @package - Manage existing routes and store them
 */

class Route
{
    /**
     * @var string - Existing path to get a page
     */
    private $path;
    /**
     * @var - Method to call at this url
     */
    private $callable;
    /**
     * @var array - All parameters from url that we enter
     */
    private $matches = [];

    /**
     * @var params - All parameters from url to check with regex
     */
    private $params = [];

    /**
     * Route constructor.
     * @param $path - Existing path to get a page
     * @param $callable - Method to call at this url
     */
    public function __construct($path, $callable)
    {
        $this->path = trim($path, '/');
        $this->callable = $callable;
    }

    /**
     * @param $param - Parameter or url
     * @param $regex - Regex to respect
     */
    public function with($param, $regex){
        $this->params[$param] = str_replace('(', '(?:', $regex);
        return $this;
    }

    public function getUrl($params){
        $path = $this->path;
        foreach($params as $key => $value){
            $path = str_replace(":$key", $value, $path);
        }
        return $path;
    }

    /**
     * @param $url - Url that we enter
     * @return bool Extract all parameters from an url
     */
    public function match($url){
        $url = trim($url, '/');
        $path = preg_replace_callback('#:([\w]+)#', [$this, 'paramMatch'], $this->path);
        $regex = '#^'.$path.'$#i'; // case sensitive

        // if url does not exist
        if(!preg_match($regex, $url, $matches)){
            return false;
        }

        array_shift($matches);
        $this->matches = $matches;
        return true;
    }

    /**
     * @return mixed - Call the function 'callable' with parameters of 'matches'
     */
    public function call(){
        if(is_string($this->callable)){
            $params = explode('#', $this->callable);
            $controller = $params[0]. 'Controller';
            require_once 'controller\\'. $controller.'.php';
            $controller = new  $controller();
            return call_user_func_array([$controller, $params[1]], $this->matches);
        } else {
            return call_user_func_array($this->callable, $this->matches);
        }
    }

    /**
     * @param $match - Regex to apply
     * @return string - Default regex
     */
    private function paramMatch($match){
        if(isset($this->params[$match[1]])){
            return '(' . $this->params[$match[1]] . ')';
        }
        return '([^/]+)';
    }
}