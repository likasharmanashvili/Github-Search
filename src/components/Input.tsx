import React, { useState } from "react";
import axios from "axios";
import {IoLocationSharp,FaTwitter ,MdApartment,FaLink} from "../icons/icons";
import Darkmode from "./DarkMode";
import {User} from "../types/common"
import image from "../images/66253257e7944d0a8daa4ffd93505228.png"


const Input: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState<User[]>([]);
    const [showResults, setShowResults] = useState(false);

   
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        setShowResults(false); 
    };

    const handleSearch = async () => {
        try {
            const response = await axios.get<User>(
                `https://api.github.com/users/${searchTerm}`
            );
            setSearchResults([response.data]);
            setShowResults(true); 
        } catch (error) {
            console.error("Error searching users:", error);
        }
    };

    return (
        <>
            
            <div className="search-container">
            <Darkmode />
                <input 
                className="input"
                    type="text"
                    placeholder="Search GitHub username… " 
                    value={searchTerm}
                    onChange={handleChange}
                />
                <button onClick={handleSearch} className="button">
                  Search
                </button>
            </div>

            {showResults ? (
               <div className="results-container">
               {searchResults.map((user) => (
                   <div className="avatar">
                     <div className="Main">
                     <div className="img">
                      <img
                           src={user.avatar_url}
                           alt={`${user.login} avatar`}
                       />
                       
                      </div>
                      <div className="info">
                       <h2 className="name">{user.login}</h2>
                       <p className="userLinkname">{user.name}</p>
                       <p className="created">{user.created_at}</p>
                       <p className="userBio">{user.bio}</p>
                    
                        <p></p>

                      </div>
                        </div>

                      <div className="followers">
                       <div className="repos">
                       <p>Repos  </p>
                       <h1>{user.public_repos}</h1>
                       </div>
                       <div className="follower">
                        <p>Followers</p>
                        <h1>{user.following}</h1>
                       </div>
                         <div className="following">
                         <p>Followers</p>
                        <h1>{user.followers}</h1>
                         </div>
                         </div>


                         <div className="Location">
                          <div className="div1">
                            <p>< IoLocationSharp /> <span>{user.location}</span></p>
                            <p><FaTwitter /> <span>{user.twitter_username}</span></p>
                          </div>

                          <div className="div2">
                            <p><FaLink /> <span>{user.gists_url}</span></p>
                            <p><MdApartment /> {user.url}</p>
                          </div>
                         </div>
                   </div>

                   
                   
               ))}
           </div>
           
                   
            ) : (
                <div className="results-container">
                    <div className="avatar">
                      <div className="Main">
                       <div className="img">  <img src={image} alt="avatar" /></div>
                        <div className="info">
                       <h2 className="name">The Octocat</h2>
                       <p className="userLinkname">@octocat</p>
                       <p className="created">Joined 25 Jan 2011</p>
                       <p className="userBio">Lorem ips</p>
                    
                        <p></p>

                      </div>
                      </div>
                      <div className="followers">
                       <div className="repos">
                       <p>Repos  </p>
                       <h1>8</h1>
                       </div>
                       <div className="follower">
                        <p>Followers</p>
                        <h1>100</h1>
                       </div>
                         <div className="following">
                         <p>Followers</p>
                        <h1>300</h1>
                         </div>
                         </div>

                         <div className="Location">
                          <div className="div1">
                            <p>< IoLocationSharp /> <span>California</span></p>
                            <p><FaTwitter /> <span>not found</span></p>
                          </div>

                          <div className="div2">
                            <p><FaLink /> <span>https://github.blog</span></p>
                            <p><MdApartment />@github</p>
                          </div>
                         </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Input;
