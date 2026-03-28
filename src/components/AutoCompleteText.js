import React from "react";
import './AutoCompleteText.css';
import gems from '../gems.json';
import PropTypes from "prop-types";

export default class AutoCompleteText extends React.Component {
    constructor(props) {
        super(props);
        this.items = Object.values(gems).map(gem => gem.display_name);

        this.state = {
            suggestions: [],
            activeIndex: -1,
            valie: "",
        };
    }

    // Keyboard input so Enter and arrow keys can be used.
    onKeyDown = (e) => {
        const { activeIndex, suggestions } = this.state;

        if (e.key === "ArrowDown") {
            this.setState({
                activeIndex:
                    activeIndex < suggestions.length - 1
                        ? activeIndex + 1
                        : activeIndex,
            });
        }

        else if (e.key === "ArrowUp") {
            this.setState({
                activeIndex: activeIndex > 0 ? activeIndex - 1 : 0,
            });
        }

        else if (e.key === "Enter") {
            if (activeIndex >= 0) {
                this.suggestionSelected(suggestions[activeIndex]);
            }
        }
    };

    onTextChanged = (e) => {
        const value = e.target.value;
        let suggestions = [];

        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = this.items.sort().filter(v => regex.test(v));
        }
        this.setState(() => ({ suggestions, activeIndex: -1, value }));

    }

    suggestionSelected(value) {
        this.setState({
            suggestions: [],
            value
        });

    }

    renderSuggestions() {
        const { suggestions, activeIndex } = this.state;

        if (suggestions.length === 0) {
            return null;
        }
        return (
            <ul className="suggestions">
                {suggestions.map((item, index) => (
                    <li key={index}
                        role="button"
                        tabIndex={0}
                        className={index === activeIndex ? "active" : ""}
                        onClick={() => this.suggestionSelected(item)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                this.suggestionSelected(item);
                            }
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        const { value } = this.state;
        return (
            <div className="AutoCompleteText">
                <input
                    value={value}
                    onChange={this.onTextChanged}
                    onKeyDown={this.onKeyDown}
                    type="text"
                    placeholder="Search for a gem"
                />
                {this.renderSuggestions()}
            </div>
        )
    }
};