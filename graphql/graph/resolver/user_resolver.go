package resolver

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"
	exec "wdda-gql/graph/exec"
	"wdda-gql/graph/model"
)

func (r *mutationResolver) CreateUser(ctx context.Context, input model.NewUser) (*model.User, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *queryResolver) Me(ctx context.Context) (*model.User, error) {
	return r.users[0], nil
}

func (r *queryResolver) Users(ctx context.Context) ([]*model.User, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *subscriptionResolver) UserAdded(ctx context.Context) (<-chan *model.User, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *userResolver) Accounts(ctx context.Context, obj *model.User) ([]*model.Account, error) {
	panic(fmt.Errorf("not implemented"))
}

// Mutation returns exec.MutationResolver implementation.
func (r *Resolver) Mutation() exec.MutationResolver { return &mutationResolver{r} }

// Query returns exec.QueryResolver implementation.
func (r *Resolver) Query() exec.QueryResolver { return &queryResolver{r} }

// Subscription returns exec.SubscriptionResolver implementation.
func (r *Resolver) Subscription() exec.SubscriptionResolver { return &subscriptionResolver{r} }

// User returns exec.UserResolver implementation.
func (r *Resolver) User() exec.UserResolver { return &userResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
type subscriptionResolver struct{ *Resolver }
type userResolver struct{ *Resolver }
