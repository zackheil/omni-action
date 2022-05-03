//  Generated with https://app.quicktype.io/ so typings might not be accurate for all GH events

export interface GitHubActionEvent {
    token: string;
    wfToken: string;
    job: string;
    ref: string;
    sha: string;
    repository: string;
    repository_owner: string;
    repository_owner_id: string;
    repositoryUrl: string;
    run_id: string;
    run_number: string;
    retention_days: string;
    run_attempt: string;
    artifact_cache_size_limit: string;
    repository_id: string;
    actor_id: string;
    actor: string;
    workflow: string;
    head_ref: string;
    base_ref: string;
    event_name: string;
    event: Event;
    server_url: string;
    api_url: string;
    graphql_url: string;
    ref_name: string;
    ref_protected: boolean;
    ref_type: string;
    secret_source: string;
    workspace: string;
    action: string;
    event_path: string;
    action_repository: string;
    action_ref: string;
    path: string;
    env: string;
    step_summary: string;
}

export interface Event {
    action: string;
    comment: Comment;
    issue: Issue;
    repository: Repository;
    sender: Sender;
}

export interface Comment {
    author_association: string;
    body: string;
    created_at: Date;
    html_url: string;
    id: number;
    issue_url: string;
    node_id: string;
    performed_via_github_app: null;
    reactions: Reactions;
    updated_at: Date;
    url: string;
    user: Sender;
}

export interface Reactions {
    "+1": number;
    "-1": number;
    confused: number;
    eyes: number;
    heart: number;
    hooray: number;
    laugh: number;
    rocket: number;
    total_count: number;
    url: string;
}

export interface Sender {
    avatar_url: string;
    events_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    gravatar_id: string;
    html_url: string;
    id: number;
    login: string;
    node_id: string;
    organizations_url: string;
    received_events_url: string;
    repos_url: string;
    site_admin: boolean;
    starred_url: string;
    subscriptions_url: string;
    type: string;
    url: string;
}

export interface Issue {
    active_lock_reason: null;
    assignee: null;
    assignees: any[];
    author_association: string;
    body: null;
    closed_at: null;
    comments: number;
    comments_url: string;
    created_at: Date;
    draft: boolean;
    events_url: string;
    html_url: string;
    id: number;
    labels: Label[];
    labels_url: string;
    locked: boolean;
    milestone: null;
    node_id: string;
    number: number;
    performed_via_github_app: null;
    pull_request: PullRequest;
    reactions: Reactions;
    repository_url: string;
    state: string;
    timeline_url: string;
    title: string;
    updated_at: Date;
    url: string;
    user: Sender;
}

export interface Label {
    color: string;
    default: boolean;
    description: null;
    id: number;
    name: string;
    node_id: string;
    url: string;
}

export interface PullRequest {
    diff_url: string;
    html_url: string;
    merged_at: null;
    patch_url: string;
    url: string;
}

export interface Repository {
    allow_forking: boolean;
    archive_url: string;
    archived: boolean;
    assignees_url: string;
    blobs_url: string;
    branches_url: string;
    clone_url: string;
    collaborators_url: string;
    comments_url: string;
    commits_url: string;
    compare_url: string;
    contents_url: string;
    contributors_url: string;
    created_at: Date;
    default_branch: string;
    deployments_url: string;
    description: null;
    disabled: boolean;
    downloads_url: string;
    events_url: string;
    fork: boolean;
    forks: number;
    forks_count: number;
    forks_url: string;
    full_name: string;
    git_commits_url: string;
    git_refs_url: string;
    git_tags_url: string;
    git_url: string;
    has_downloads: boolean;
    has_issues: boolean;
    has_pages: boolean;
    has_projects: boolean;
    has_wiki: boolean;
    homepage: null;
    hooks_url: string;
    html_url: string;
    id: number;
    is_template: boolean;
    issue_comment_url: string;
    issue_events_url: string;
    issues_url: string;
    keys_url: string;
    labels_url: string;
    language: string;
    languages_url: string;
    license: null;
    merges_url: string;
    milestones_url: string;
    mirror_url: null;
    name: string;
    node_id: string;
    notifications_url: string;
    open_issues: number;
    open_issues_count: number;
    owner: Sender;
    private: boolean;
    pulls_url: string;
    pushed_at: Date;
    releases_url: string;
    size: number;
    ssh_url: string;
    stargazers_count: number;
    stargazers_url: string;
    statuses_url: string;
    subscribers_url: string;
    subscription_url: string;
    svn_url: string;
    tags_url: string;
    teams_url: string;
    topics: any[];
    trees_url: string;
    updated_at: Date;
    url: string;
    visibility: string;
    watchers: number;
    watchers_count: number;
}
