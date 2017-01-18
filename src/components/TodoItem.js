import React from "react";
import styled from "styled-components";
import classnames from "classnames";

const StyledListItem = styled.li`
	position: relative;
	font-size: 24px;
	border-bottom: 1px solid #ededed;

	&:last-child {
		border-bottom: none;
	}

	&.editing {
		border-bottom: none;
		padding: 0;
	}

	.edit {
		display: block;
		width: 506px;
		padding: 13px 17px 12px 17px;
		margin: 0 0 0 43px;
	}

	.toggle {
		text-align: center;
		width: 40px;
		/* auto, since non-WebKit browsers doesn't support input styling */
		height: auto;
		position: absolute;
		top: 0;
		bottom: 0;
		margin: auto 0;
		border: none; /* Mobile Safari */
		appearance: none;
		-moz-appearance: checkbox; /* over-riding autoprefixer */
	}

	.toggle:after {
		content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>');
	}

	.toggle:checked:after {
		content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>');
	}

	label {
		white-space: pre-line;
		word-break: break-all;
		padding: 15px 60px 15px 15px;
		margin-left: 45px;
		display: block;
		line-height: 1.2;
		transition: color 0.4s;
	}

	&.completed label {
		color: #d9d9d9;
		text-decoration: line-through;
	}

	.destroy {
		display: none;
		position: absolute;
		top: 0;
		right: 10px;
		bottom: 0;
		width: 40px;
		height: 40px;
		margin: auto 0;
		font-size: 30px;
		color: #cc9a9a;
		margin-bottom: 11px;
		cursor: pointer;
		transition: color 0.2s ease-out;
	}

	.destroy:hover {
		color: #af5b5e;
	}

	.destroy:after {
		content: '×';
	}

	&:hover .destroy {
		display: block;
	}

	&.editing:last-child {
		margin-bottom: -1px;
	}

	/*
		Hack to remove background from Mobile Safari.
		Can't use it globally since it destroys checkboxes in Firefox
	*/
	@media screen and (-webkit-min-device-pixel-ratio:0) {
		.toggle {
			background: none;
		}

		.toggle {
			height: 40px;
		}
	}
`;

class TodoItem extends React.Component {
  state = { editing: false };

  componentDidUpdate() {
    if (this.state.editing) {
      this.editInputEl.focus();
    }
  }

  render() {
    const { todo } = this.props;
    const { editing } = this.state;
    return (
      <StyledListItem
        className={classnames({ completed: todo.completed, editing })}
        onDoubleClick={() => this.setState({ editing: true })}
      >
        {
          editing
            ? (
              <input
                className="edit"
                defaultValue={todo.title}
                onBlur={() => this.setState({ editing: false })}
                ref={el => this.editInputEl = el}
              />
            )
            : (
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => {
                    }}
                />
                <label>{todo.title}</label>
                <button
                  className="destroy"
                  onClick={() => {
                    }}
                >
                </button>
              </div>
            )
        }
      </StyledListItem>
    );
  }
}

export default TodoItem;